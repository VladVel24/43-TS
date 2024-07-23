import styles from './robotForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'


interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

export default function RobotForm() {


  const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError('введи свой номер робота')
    .required('напиши свою модель')
    .min(100, 'твоя модель начинается со 100!')
    .max(1000, 'твоя модель должна быть до 1000'),
    creator: Yup
    .string()
    .required('скажи имя создателя'),
    email: Yup
    .string()
    .email('некорректный формат email')
    .required('это поле обязательно')


  });

  // вызываем хук useFormik и передаем объект с настройками 
  // результат вызова передаем в переменную formik

 const formik = useFormik ({

// Передаем начальные значение для формы
// Типизируем значение по ключу через оператора 'as'

initialValues: {
  model: '',
  creator: '',
  email: ''

} as IFormValues,
validationSchema: schema,
validateOnChange: false,

onSubmit: (values: IFormValues, { resetForm}) => {
  console.log(values);
  resetForm();
  
}
});





  return (
    <>
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}> 
    <label>Это форма для робота 〠</label>
      <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='ваша модель' />
      <input value={formik.values.creator} name='creator' onChange={formik.handleChange} type="text" placeholder='имя создателя' />
      <input value={formik.values.email} name= 'email' onChange={formik.handleChange} type="text" placeholder='email производителя' />
      <button type="submit">отправить</button>
    </form>

      <span className={styles.errors}>{formik.errors.email}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.model}</span>
    </>
  );
}
