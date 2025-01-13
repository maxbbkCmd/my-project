import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../../../components/IconWrapper";
import { S } from "./Skill_Styled";

const skillsData = [
  {
    iconId: "penIcon",
    width: "100%",
    height: "75px",
    viewBox: "0 0 96 96",
    text: "Product Design",
    mobileWidth: "114px",
    mobileHeight: "50px",
  },
  {
    iconId: "uxUiIcon",
    width: "100%",
    height: "54",
    viewBox: "0 -10 148 54",
    text: "UX/UI Design",
    mobileWidth: "114px",
    mobileHeight: "50px",
  },
  {
    iconId: "burgerIcon",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75",
    text: "Icon Design",
    mobileWidth: "50px",
    mobileHeight: "50px",
  },
  {
    iconId: "squareIcon",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75",
    text: "Logo Design",
    mobileWidth: "50px",
    mobileHeight: "50px",
  },
  {
    iconId: "computerIcon",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75",
    text: "Backend",
    mobileWidth: "50px",
    mobileHeight: "50px",
  },
  {
    iconId: "badgesIcon",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75",
    text: "Frontend",
    mobileWidth: "50px",
    mobileHeight: "50px",
  },
  {
    iconId: "backendIcon",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75",
    text: "Motion",
    mobileWidth: "50px",
    mobileHeight: "50px",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <FlexWrapper justify='center' wrap="wrap" gap="30px">
          {skillsData.map((skill) => (
            <IconWrapper key={skill.iconId} {...skill} />
          ))}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

