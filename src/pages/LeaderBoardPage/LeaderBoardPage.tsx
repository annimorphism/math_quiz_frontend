import Layout from 'components/Layout/Layout'
import { Link } from 'react-router-dom'

const users = [
  { name: 'John', score: 100 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 80 },
  { name: 'Jill', score: 70 },
  { name: 'Joe', score: 60 },
  { name: 'Jen', score: 50 },
  { name: 'Jenny', score: 40 },
  { name: 'Jenny', score: 30 },
  { name: 'Jenny', score: 20 },
  { name: 'Jenny', score: 10 },

]

function LeaderBoardPage(props: any) {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='mb-8 items-center flex gap-3'>
          <Link to="/">
            <p className='bg-gray-50 text-sm px-4 py-1 rounded-xl mt-1'>Back</p>
          </Link>
          <p className='text-3xl font-semibold'>Leaderboard</p>
        </div>
        <div className="flex flex-col gap-y-2  h-[70vh] w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] shadow-2xl rounded-2xl overflow-scroll">
          <div className='p-8 flex flex-col gap-3'>
            {props.leaderboard.map((user:any, index:any) => (
              <>
                <div className=" bg-[#fbfbfb] border border-gray-100 p-4 rounded-xl flex justify-between text-gray-900">
                  <p className='font-medium'>{index + 1}. {user.name} </p>
                  <span>{user.score} pts</span>
                </div>
              </>
            ))}

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default LeaderBoardPage