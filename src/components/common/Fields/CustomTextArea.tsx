import styled from 'styled-components';

interface Props {
  label: React.ReactNode;
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'search';
  value: string;
  placeholder?: string;
  hideLabel?: boolean; // true인 경우, 시각적으로는 숨기고 스크린 리더에서만 활용
  invalid?: boolean; // 검증 오류 상태 표시
  onChange: (value: string) => void | undefined;
  disabled?: boolean;
  rows?: number;
  minLength?: number;
  maxLength?: number;
  id?: string;
}

const CustomTextArea = ({
  rows = 6,
  label,
  value,
  placeholder = '',
  hideLabel = false,
  disabled,
  onChange,
  minLength = 30,
  maxLength = 300,
  id,
}: Props) => {
  return (
    <TextAreaContainer>
      {!hideLabel && <CustomInputLabel>{label}</CustomInputLabel>}
      <CustomInputField
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>
        {value?.length}/{maxLength}
      </span>
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.fieldset`
  position: relative;
  align-items: flex-start;
  gap: var(--vapor-size-space-100);
  flex-direction: column;
  width: 100%;
  display: flex;

  & > span {
    position: absolute;
    bottom: 16px;
    right: 20px;
    font-size: 14px;
  }
`;

const CustomInputField = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: var(--vapor-size-borderRadius-300);
  border: 1px solid var(--vapor-color-gray-900);
  padding: var(--vapor-size-space-200);
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  resize: none;
  font-size: 14px;
  &:focus-visible {
    outline: unset;
    border-color: var(--vapor-color-border-primary);
  }
`;

const CustomInputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export default CustomTextArea;
