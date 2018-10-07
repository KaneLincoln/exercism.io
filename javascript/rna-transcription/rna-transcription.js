export const toRna = (dna) => {
  const dnaArr = dna.split('');
  const filter = dnaArr.filter(letter =>
    letter === 'C' || letter === 'G' ||
    letter === 'A' || letter === 'T'
  );
  if (filter.length !== dnaArr.length) throw new Error('Invalid input DNA.');
  const rnaArr = dnaArr.map(letter => {
    switch (letter) {
      case 'C': return 'G';
      case 'G': return 'C';
      case 'A': return 'U';
      case 'T': return 'A';
    }
  });
  return rnaArr.join('');
}

// console.log(toRna('ACGTXXXCTTAA'));
