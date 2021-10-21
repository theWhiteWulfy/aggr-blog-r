import styled, {themeGet, device } from "@theme/utils";
export const MostpopularCategoryArea = styled.div`
    padding-top: 60px;
    ${device.medium}{
        padding-top: 80px;
    }
    ${device.large}{
        padding-top: 120px;
    }
`
export const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 40px;
`
export const Title = styled.h2`

`
export const HeroThreeCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    a {
        margin: 10px;
        text-align: center;
        height: 46px;
        line-height: 46px;
        border-radius: 15px;
        background: #f4eaff;
        color: #0f034a;
        border: none;
        padding: 0 30px;
        display: inline-block;
        ${device.xlarge}{
            height: 66px;
            line-height: 66px;
            min-width: 200px;
        }
        &:hover {
            background: ${themeGet("colors.primary")};
            color: #fff;
        }
    }
`