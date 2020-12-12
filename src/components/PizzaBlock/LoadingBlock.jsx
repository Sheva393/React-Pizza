import React from 'react'
import ContentLoader from "react-content-loader"




function LoadingBlock() {
        return(
            <ContentLoader 
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
          >
            <circle cx="140" cy="140" r="140" /> 
            <rect x="2" y="289" rx="14" ry="14" width="270" height="36" /> 
            <rect x="-1" y="336" rx="18" ry="18" width="279" height="46" /> 
            <rect x="9" y="399" rx="18" ry="18" width="85" height="43" /> 
            <rect x="128" y="395" rx="14" ry="14" width="146" height="49" />
          </ContentLoader>
          )
}

export default LoadingBlock;