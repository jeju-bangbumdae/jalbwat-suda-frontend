import { TextInput } from '@vapor-ui/core';
import styled from 'styled-components';

interface Props {
  label: React.ReactNode;
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'search';
  value: string;
  placeholder?: string;
  hideLabel?: boolean; // true인 경우, 시각적으로는 숨기고 스크린 리더에서만 활용
  invalid?: boolean; // 검증 오류 상태 표시
  onChange: (value: string) => void | undefined;
}

const CustomTextField = ({
  type = 'text',
  label,
  value,
  placeholder = '',
  hideLabel = false,
  invalid = false,
  onChange,
}: Props) => {
  return (
    <TextInput.Root
      type={type}
      value={value}
      onValueChange={onChange}
      visuallyHidden={hideLabel}
      invalid={invalid}
      placeholder={placeholder}
      size={'lg'}
    >
      {!!label && <CustomInputLabel>{label}</CustomInputLabel>}
      <CustomInputField />
    </TextInput.Root>
  );
};

const CustomInputField = styled(TextInput.Field)`
  width: 100%;
  border-width: 1px;
  border-color: var(--vapor-color-gray-900);

  &:focus-visible {
    border-color: var(--vapor-color-border-primary);
  }
`;

const CustomInputLabel = styled(TextInput.Label)`
  font-size: 14px;
`;

export default CustomTextField;
