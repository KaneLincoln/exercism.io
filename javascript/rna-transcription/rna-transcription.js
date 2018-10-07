export const toRna = (dna) => {
  const dnaToRna = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  };

  const rna = dna.split('').map(letter => {
    if (Object.keys(dnaToRna).includes(letter)) {
      return dnaToRna[letter];
    } else {
      throw new Error('Invalid input DNA.');
    }
  }).join('');
  return rna;
}
