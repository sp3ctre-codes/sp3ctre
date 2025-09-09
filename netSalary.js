function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  function calculatePAYE(income) {
    let tax = 0;

    if (income <= 24000) {
      tax = income * 0.1;
    } else if (income <= 32333) {
      tax = (24000 * 0.1) + ((income - 24000) * 0.25);
    } else if (income <= 500000) {
      tax = (24000 * 0.1) + (8333 * 0.25) + ((income - 32333) * 0.30);
    } else if (income <= 800000) {
      tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + ((income - 500000) * 0.325);
    } else {
      tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((income - 800000) * 0.35);
    }

    // Subtract personal relief
    tax -= 2400;
    return tax < 0 ? 0 : tax;
  }

  const payee = calculatePAYE(grossSalary);
  const shif = grossSalary * 0.0275;
  const tier1 = Math.min(basicSalary, 8000) * 0.06;
  const tier2 = basicSalary > 8000 ? Math.min(basicSalary - 8000, 64000) * 0.06 : 0;
  const nssf = tier1 + tier2;
  const housingLevy = grossSalary * 0.015;
  const netSalary = grossSalary - (payee + shif + nssf + housingLevy);

  return { grossSalary, payee, shif, nssf, housingLevy, netSalary };
}

console.log(calculateNetSalary(50000, 10000));
