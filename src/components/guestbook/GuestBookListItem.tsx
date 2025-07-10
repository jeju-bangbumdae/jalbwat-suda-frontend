"use client";

import { Card, Text } from "@vapor-ui/core";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  content: string;
}

const GuestBookListItem = ({ content }: Props) => {
  const [isMore, setMore] = useState(false);
  const [isOverflowed, setOverflowed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxLines = 2;
    const maxHeight = lineHeight * maxLines;

    if (el.scrollHeight > maxHeight + 1) {
      setOverflowed(true);
    }
  }, [content]);

  return (
    <Card.Root style={{borderColor: "var(--color-gray-900)"}}>
      <CustomBody>
        <ContentText ref={contentRef} $isMore={isMore}>
          {content}
        </ContentText>
        {isOverflowed && (
          <UnderLineBtn onClick={() => setMore(!isMore)}>
            {isMore ? "닫기" : "더보기"}
          </UnderLineBtn>
        )}
      </CustomBody>
    </Card.Root>
  );
};

export default GuestBookListItem;

const CustomBody = styled(Card.Body)`
  padding: 20px;
  overflow: hidden;
`;

const ContentText = styled.div<{ $isMore: boolean }>`
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-gray-700);

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $isMore }) => ($isMore ? "none" : 3)};
  overflow: hidden;
  white-space: pre-line;
  word-break: break-word;
`;

const UnderLineBtn = styled(Text)`
  display: inline-block;
  margin-top: 5px;
  text-decoration: underline;
  color: var(--color-gray-400);
  cursor: pointer;
  font-size: 12px;
`;