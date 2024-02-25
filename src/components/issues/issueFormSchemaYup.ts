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
  description: Yup.string().max(250, 'Description should not be more than 250 characters'),
  tags: Yup.string().max(100, 'Tags should not be more than 100 characters'),
  estimate: Yup.number()
    .positive('Value must be positive')
    .nullable()
    .transform((_, v) => (v === '' || Number.isNaN(v) ? null : v)),
  rankId: Yup.number()
    .positive('Value must be positive')
    .nullable()
    .transform((_, v) => (v === '' || Number.isNaN(v) ? null : v)),

  color: Yup.string().max(25, 'Tags should not be more than 25 characters'),
  className: Yup.string().max(100, 'Tags should not be more than 100 characters'),
  deadline: Yup.string().max(50, 'Tags should not be more than 50 characters'),

  issueStatusId: Yup.number().required('Status is a required').positive('Value must be positive'),
  issueKindId: Yup.number().required('Kind is a required').positive('Value must be positive'),
  issuePriorityId: Yup.number()
    .required('Priority is a required')
    .positive('Value must be positive'),
  creatorId: Yup.number().required('Field is a required').positive('Value must be positive'),
  assigneeId: Yup.number()
    .positive('Value must be positive')
    .nullable()
    .transform((_, v) => (v === '' || Number.isNaN(v) ? null : v))
})

export default issueFormSchemaYup
