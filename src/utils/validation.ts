import { validate, validateSync } from 'class-validator';

export function validateDomain(obj: object) {
  const errors = validateSync(obj, {
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  if (errors.length > 0) {
    let message = '';
    errors.forEach((error) => {
      console.log(errors.toString());
      const constraints = Object.entries(error.constraints || []);
      constraints.map(([_, constraintMessage]) => {
        return (message += constraintMessage + '\n');
      });
    });
    throw new Error('Is not Valitdate data');
  }
}
