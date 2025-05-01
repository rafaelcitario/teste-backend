export async function validateCPF ( cpf: string ): Promise<boolean> {
  cpf = cpf.replace( /\D/g, '' );

  if ( cpf.length !== 11 || /^(\d)\1{10}$/.test( cpf ) ) {
    return false;
  }


  const firstDigit = await calcDigit( 10, cpf );
  const secondDigit = await calcDigit( 11, cpf );

  return (
    firstDigit === parseInt( cpf[9] )
    && secondDigit === parseInt( cpf[10] )
  );
}

const calcDigit = async ( factor: number, cpf: string ): Promise<number> => {
  let total = 0;
  for ( let i = 0; i < factor - 1; i++ ) {
    total += parseInt( cpf[i] ) * ( factor - i );
  }
  const remainder = total % 11;
  return await remainder < 2 ? 0 : 11 - remainder;
};
