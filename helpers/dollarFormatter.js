export const dollarFormatter = ( cantidad ) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return formatter.format(cantidad)
}
