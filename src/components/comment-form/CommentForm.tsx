import { memo, type FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, HStack, Input } from '@chakra-ui/react';
import 'src/styles/CommentForm.scss';

type CommentFormProps = {
  placeholder: string;
  onSubmit: (text: string) => void;
  buttonText: string;
};

const CommentForm: FC<CommentFormProps> = ({
  placeholder,
  onSubmit,
  buttonText,
}) => (
  <Formik
    initialValues={{ text: '' }}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values.text);
      resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <Form className="reply-form">
        <HStack width="100%">
          <Field
            as={Input}
            name="text"
            placeholder={placeholder}
            className="form-input"
          />
          <Button type="submit" loading={isSubmitting} size="sm">
            {buttonText}
          </Button>
        </HStack>
        <ErrorMessage name="text" component="div" className="error-message" />
      </Form>
    )}
  </Formik>
);

export default memo(CommentForm);
