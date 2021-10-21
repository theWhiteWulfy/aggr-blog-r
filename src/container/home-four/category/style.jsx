import styled, { themeGet, device } from "@theme/utils";
export const CategoryArea = styled.div`
    padding-top: 60px;
    ${device.medium}{
        padding-top: 100px;
    }
`
export const HeroFourCategory = styled.div`
    border-top: 1px solid #edf0f8;
    border-bottom: 1px solid #edf0f8;
    padding: 15px 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${device.large}{
        justify-content: space-between;
    }
    
    a {
        margin: 10px;
        text-align: center;
        height: 46px;
        line-height: 46px;
        background: #edf0f8;
        color: #081131;
        border: none;
        padding: 0 30px;
        display: inline-block;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        ${device.large}{
            height: 66px;
            line-height: 66px;
            min-width: 150px;
            padding: 0px 30px;
        }
        ${device.xlarge}{
            height: 66px;
            line-height: 66px;
            min-width: 200px;
            padding: 0px 30px;
        }
        &:hover {
            background-color: ${themeGet("colors.primary")};
            color: ${themeGet("colors.white")};
        }
    }
`