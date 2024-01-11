export const cn = (...args) => args.join(' ');

export const cond = (cond, trueClass, falseClass = '') =>
  cond ? trueClass : falseClass;

export const combineStyle = (
  defaultClass,
  condition,
  trueClass,
  falseClass
) => {
  return cn(defaultClass, cond(condition, trueClass, falseClass));
};
