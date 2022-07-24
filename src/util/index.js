export function randomLists(arr, quantityInGroup) {
  const groups = [];

  const shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  for (let i = 0; i < shuffled.length; i = i + quantityInGroup) {
    const sliceShuffled = shuffled.slice(i, quantityInGroup + i);

    groups.push(sliceShuffled);
  }

  return groups;
}
