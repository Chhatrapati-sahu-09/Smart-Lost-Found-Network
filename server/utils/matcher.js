function calculateScore(lost, found) {
  let score = 0;

  // 1. Title match (strong weight)
  if (lost.title.toLowerCase() === found.title.toLowerCase()) {
    score += 40;
  }

  // 2. Description keyword match
  const lostWords = lost.description.toLowerCase().split(" ");
  const foundWords = found.description.toLowerCase().split(" ");

  const common = lostWords.filter((word) => foundWords.includes(word));
  score += Math.min(common.length * 5, 30);

  // 3. Location match
  if (
    lost.location?.address &&
    found.location?.address &&
    lost.location.address.toLowerCase() === found.location.address.toLowerCase()
  ) {
    score += 20;
  }

  return score;
}

module.exports = calculateScore;
