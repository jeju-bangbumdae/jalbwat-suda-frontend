"use client";
import { Text } from "@vapor-ui/core";
import styled from "styled-components";
import BackButton from "../buttons/BackButton";

interface Props {
	isBack?: boolean;
	title?: string;
}

const TopBar = ({ isBack = false, title = "" }: Props) => {
	return (
		<Container>
			<LeadingContainer>{isBack && <BackButton />}</LeadingContainer>
			<Title>{title}</Title>
		</Container>
	);
};

export default TopBar;

// 스타일 정의

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 56px;
`;

const LeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const Title = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: 600;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  background: aqua;
`;