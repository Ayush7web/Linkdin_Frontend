import React from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard';
import Advertisement from '../../components/Advertisement/advertisement';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/card';
import Post from '../../components/Post/post';


const AllActivities = () => {

  const id = useParams();
  console.log(id);
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100 justify-center">
      {/* the left part card for feeds  */}
      <div className="w-[21%] sm-block sm:w-[21%] py-5 ">
        <div className="h-fit">
          <ProfileCard />
        </div>
      </div>

      {/* the middle part card for feeds  */}

      <div className="w-[100%] py-5 sm:w-[50%] ">
        {/* post section  */}

        <div>
          <Card padding={1}>
            <div className="text-xl">All activity</div>
            <div className="cursor-pointer w-fit p-2 border-1 bg-green-800 my-2 text-white font-semibold">
              Posts
            </div>
            <div className="my-2 flex flex-col gap-5">
              <div>
                <Post />
              </div>
              <div>
                <Post />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* the right part card for feeds  */}
      <div className="hidden md:flex md:w-[21%]">
        <div className="sticky top-7 ">
          <Advertisement />
        </div>
      </div>
    </div>
  );
}

export default AllActivities