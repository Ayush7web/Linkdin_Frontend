import { Card } from '@mui/material'
import Image from "../../Image/ayush-image.jpg"


const Advertisement = () => {
  return (
    <div className="sticky top-18">
      <Card padding={0}>
        <div className="relative h-25">
          <div className="relative w-full h-22 rounded-md">
            <img
              src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/sparkling-stars-on-blue-night-background-vector_Mk6v_ewd_thumb.jpg"
              alt=""
              className="rounded-t-md h-full w-full"
            />
          </div>
          <div className="absolute top-14 left-6 z-10">
            <img
              src={Image}
              alt=""
              className="rounded-4xl border-2 h-14 w-14 relative left-18 border-white cursor-pointer"
            />
          </div>
        </div>

        <div className="px-5 my-5 mx-auto">
          <div className="text-sm font-semibold text-center">Ayush Kumar</div>
          <div className="text-sm my-3 text-center">
            Get the latest jobs and industry news{" "}
          </div>
          <div className="text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer">
            Explore
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Advertisement