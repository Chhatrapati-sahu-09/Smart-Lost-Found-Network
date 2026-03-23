const { execSync } = require("child_process");
const os = require("os");

const port = Number(process.env.PORT || 5000);

function getPidsOnWindows(targetPort) {
  try {
    const output = execSync(`netstat -ano -p tcp | findstr :${targetPort}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return [
      ...new Set(
        output
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line.includes("LISTENING"))
          .map((line) => Number(line.split(/\s+/).pop()))
          .filter((pid) => Number.isInteger(pid) && pid > 0),
      ),
    ];
  } catch {
    return [];
  }
}

function getPidsOnUnix(targetPort) {
  try {
    const output = execSync(`lsof -ti tcp:${targetPort}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return [
      ...new Set(
        output
          .split(/\r?\n/)
          .map((line) => Number(line.trim()))
          .filter((pid) => Number.isInteger(pid) && pid > 0),
      ),
    ];
  } catch {
    return [];
  }
}

function killPids(pids) {
  if (!pids.length) {
    console.log(`[predev] Port ${port} is free`);
    return;
  }

  for (const pid of pids) {
    try {
      if (os.platform() === "win32") {
        execSync(`taskkill /PID ${pid} /F`, {
          stdio: ["ignore", "ignore", "ignore"],
        });
      } else {
        execSync(`kill -9 ${pid}`, { stdio: ["ignore", "ignore", "ignore"] });
      }
      console.log(`[predev] Killed PID ${pid} on port ${port}`);
    } catch {
      console.log(`[predev] Could not kill PID ${pid}; continuing`);
    }
  }
}

const pids =
  os.platform() === "win32" ? getPidsOnWindows(port) : getPidsOnUnix(port);
killPids(pids);
