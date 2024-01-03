const increment =
  (value = 1) =>
  (c) =>
    c + value;
const decrement =
  (value = 1) =>
  (c) =>
    c - value;
const multiplication =
  (factor = 2) =>
  (c) =>
    c * factor;
const division =
  (factor = 2) =>
  (c) =>
    factor ? Math.round(c / factor) : c;

const MATH_OPERATIONS = {
  '+': increment,
  '-': decrement,
  '*': multiplication,
  '/': division,
};

const functionFactory = (operand) => {
  const [sign, ...value] = operand;
  if (!!MATH_OPERATIONS[sign] && typeof +value === 'number') {
    return MATH_OPERATIONS[sign](+value);
  }
};

const functionConveyor = (operands) =>
  operands.reduce(
    (prev, curOperand) => ({
      ...prev,
      [curOperand]: functionFactory(curOperand),
    }),
    {}
  );

export { functionFactory, functionConveyor };
