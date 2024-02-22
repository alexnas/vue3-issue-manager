import * as Yup from 'yup'

const issueFormSchemaYup = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(5, 'Title should be at least 5 characters')
    .max(50, 'Title should not be more than 50 characters'),
  summary: Yup.string()
    .required('Summary is required')
    .min(5, 'Summary should be at least 5 characters')
    .max(50, 'Summary should not be more than 50 characters'),
  description: Yup.string().max(250, 'Description should not be more than 250 characters')
})

export default issueFormSchemaYup
