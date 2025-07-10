'use client';

import { BottomNav } from "@/components/navigation/BottomNav";
import TopBar from "@/components/navigation/TopBar";
import { Card, Text } from "@vapor-ui/core";
import Image from "next/image";
import styled from "styled-components";

export default function Page() {

	const CardUI = ({ rewardScore, badgeCnt }: { rewardScore: number, badgeCnt: number }) => {
		return (
			<Card.Root style={{ borderColor: "var(--color-gray-900)", width: "100%" }}>
				<CustomBody>
					<CustomCardContent>
						<Text typography="heading5" style={{ color: 'var(--color-gray-900)' }}>
							{rewardScore}<Text aria-setsize={14}>{" 점"}</Text>
						</Text>
						<Text typography="body2" style={{ color: 'var(--color-gray-500)' }}>
							{"리워드"}
						</Text>
					</CustomCardContent>
					<Divider />
					<CustomCardContent>
						<Text typography="heading5" style={{ color: 'var(--color-gray-900)' }}>
							{badgeCnt}<Text aria-setsize={14}>{" 개"}</Text>
						</Text>
						<Text typography="body2" style={{ color: 'var(--color-gray-500)' }}>
							{"뱃지"}
						</Text>
					</CustomCardContent>
				</CustomBody>
			</Card.Root>
		)
	}

	return (
		<>
			<TopBar height={"20vw"} hasSetting />
			<ProfileModal>
				<ProfileImageContainer>
					<Image src="/images/defaultUser.png" width={100} height={100} alt="" style={{ border: "2px solid var(--color-white)", borderRadius: "50px" }} />
				</ProfileImageContainer>
				<TextContainer>
					<Text typography="heading4" asChild>
						<h3 style={{ color: 'var(--color-gray-900)' }}>{"이름 아므건 ㅏ입닏"}</h3>
					</Text>
				</TextContainer>
				<CardUI rewardScore={10} badgeCnt={4} />
			</ProfileModal>
			<BottomNav />
		</>
	)

}

const ProfileModal = styled.div`
  position: relative;
  top: -20px;
  border-radius: 20px 20px 0 0;
  background-color: var(--color-white);
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 60px 20px 0;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  
//   overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
	margin-top: -100px;
	z-index: 2;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0; // 크기 고정
`;


const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CustomBody = styled(Card.Body)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
`

const CustomCardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex: 1;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--color-gray-300); /* border 대신 배경색 사용 */
`;