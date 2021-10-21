import styled, { device } from "@theme/utils";

export const FeaturedVideoWrap = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    ${device.small}{
        margin-top: 80px;
        padding-bottom: 80px;
    }
`
export const FeaturedVideoCol8 = styled.div`
    max-width: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    ${device.xlarge}{
        max-width: 850px;
    }
`
export const FeaturedVideoBox = styled.div`
    
`
export const LatestPostCol4 = styled.div`
    max-width: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    ${device.xlarge}{
        max-width: 363px;
    }
`
