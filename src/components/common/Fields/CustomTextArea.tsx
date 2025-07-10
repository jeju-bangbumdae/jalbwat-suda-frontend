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
}

const CustomTextArea = ({
  rows,
  label,
  value,
  placeholder = '',
  hideLabel = false,
  disabled,
  onChange,
  minLength = 30,
  maxLength = 300,
}: Props) => {
  return (
    <TextAreaContainer>
      {!hideLabel && <CustomInputLabel>{label}</CustomInputLabel>}
      <CustomInputField
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
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

const TextAreaContainer = styled.div`
  align-items: flex-start;
  gap: var(--vapor-size-space-100);
  flex-direction: column;
  width: 100%;
  display: flex;
`;

const CustomInputField = styled.textarea`
  width: 100%;
  border-width: 1px;
  border-color: var(--vapor-color-gray-900);

  &:focus-visible {
    border-color: var(--vapor-color-border-primary);
  }
`;

const CustomInputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export default CustomTextArea;
