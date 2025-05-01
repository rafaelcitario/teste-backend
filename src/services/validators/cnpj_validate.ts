export async function validateCNPJ ( cnpj: string ): Promise<boolean> {
  cnpj = cnpj.replace( /\D/g, '' );

  if ( cnpj.length !== 14 || /^(\d)\1{13}$/.test( cnpj ) ) return false;

  const base = cnpj.slice( 0, 12 );
  const digit1 = await calcDigit( base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] );
  const digit2 = await calcDigit( base + digit1, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] );

  return (
    digit1 === parseInt( cnpj[12] )
    && digit2 === parseInt( cnpj[13] )
  );
}

const calcDigit = async ( base: string, weights: number[] ): Promise<number> => {
  const sum = base
    .split( '' )
    .map( ( digit, i ) => parseInt( digit ) * weights[i] )
    .reduce( ( a, b ) => a + b, 0 );
  const remainder = sum % 11;
  return await remainder < 2 ? 0 : 11 - remainder;
};
