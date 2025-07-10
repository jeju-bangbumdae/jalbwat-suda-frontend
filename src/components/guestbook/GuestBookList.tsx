"use client";
import { GuestBookResponse } from "@/types/dto/GuestBook";
import GuestBookListItem from "./GuestBookListItem"
import styled from "styled-components";

interface Props {
	data: GuestBookResponse[];
}

const GuestBookList = ({ data }: Props) => {
	return (
		<Container>
			{!!data && data.map((iter) => {
				return (
					<GuestBookListItem key={iter.id} content={iter.content} />
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export default GuestBookList;