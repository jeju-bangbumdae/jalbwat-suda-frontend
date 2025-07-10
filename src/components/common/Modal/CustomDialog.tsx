"use client";
import { Button, Dialog } from "@vapor-ui/core";
import styled from "styled-components";

interface Props {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	titleDescription?: string;
	content: React.ReactNode;
	btnText?: string;
}

const CustomDialog = ({
	isOpen,
	setOpen,
	title,
	titleDescription,
	content,
	btnText = "확인"

}: Props) => {
	return (
		<Dialog.Root open={isOpen}>
			<CustomContent>
				<CustomHeader>
					{!!titleDescription && <Dialog.Description style={{color: 'var(--color-gray-800)'}}>{titleDescription}</Dialog.Description>}
					<Dialog.Title style={{fontSize: "22px"}}>{title}</Dialog.Title>
				</CustomHeader>
				<CustomBody>
					{content}
				</CustomBody>
				<Dialog.Footer>
					<Button stretch size={"lg"} style={{ color: 'var(--color-gray-900)' }} onClick={() => setOpen(false)}>{btnText}</Button>
				</Dialog.Footer>
			</CustomContent>
		</Dialog.Root>
	)

}

const CustomHeader = styled(Dialog.Header)`
	flex-direction: column;
	gap: 4px;
`;

const CustomContent = styled(Dialog.CombinedContent)`
  padding: 30px;
  max-width: 460px;         // 너비 최대값 유지
  width: calc(100% - 40px); // 좌우 20px 여백
  gap: 20px;
`;

const CustomBody = styled(Dialog.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CustomDialog;