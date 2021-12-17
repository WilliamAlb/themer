import * as S from "./footer.style"
export function Footer(){
    return(
        <S.Footer>
            <S.FooterTextDiv>
                <S.FooterText>Made by William Allaberdyev</S.FooterText>
                <S.FooterText>© 2021</S.FooterText>
            </S.FooterTextDiv>
            <S.FooterTextDiv>
                <S.FooterText>Powered by Firebase</S.FooterText>
                <S.FooterText>Icons by Heroicons and HeroScout</S.FooterText>
            </S.FooterTextDiv>
        </S.Footer>
    );
}