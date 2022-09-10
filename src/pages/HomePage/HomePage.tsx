import Button from 'components/Button/Button'
import Layout from 'components/Layout/Layout'
import Input from 'components/Input/Input'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { intialState } from 'App'




function HomePage(props: any) {

  const { ws, username, setUserName, question, score } = props;

  const [solution, setSolution] = useState<string>('');
  const [usernameFilled, setUsernameFilled] = useState(false)


  function submitName() {
    if (!username) {
      toast.error('Please enter your username')
      return
    }
    if (username) {
      setUsernameFilled(true)
      ws.send(JSON.stringify({ type: 'whoami', name: username }));
      ws.send(JSON.stringify({ type: 'get_questions', name: username }));
    }
  }

  function onSolutionSubmit() {
    if (!solution) {
      toast.error('Please enter your solution')
      return
    }

    if (solution) {
      props.ws.send(JSON.stringify({ type: 'answer', name: username, answer: solution, question_id: question.id }));
    }
    setSolution('')
  }

  function onLogout() {
    localStorage.clear()
    setUserName('')
    setUsernameFilled(false)
  }

  return (
    <Layout>
      <div className='flex justify-center items-center h-full w-full'>
        {!usernameFilled && <>
          <div className="flex flex-col gap-y-2 items-center">
            <div className="mb-6">
              <p className='text-3xl font-bold'>Math Quiz App</p>
            </div>
            <Input
              name={username}
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              placeholder='Enter your name'
            />
            <div className="mt-2">
              <Button onClick={submitName} text="Submit" />
            </div>
          </div>
        </>
        }

        {usernameFilled && <>

          <div className="flex flex-col gap-y-2 items-center">
            <div className="mb-6 flex flex-col gap-2 text-center">
              <p className='text-3xl font-bold'>Math Quiz App</p>
              <p className='text-gray-700 font-medium'>user : {username}</p>
            </div>
            <div className="w-full h-24 border-2 border-gray-400 rounded-xl border-dashed mb-4 flex items-center justify-center">

              <p>{question !== null ? question.question : ''}</p>

            </div>
            <div className="mb-6 flex flex-col gap-2 text-center">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Input
                  name={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  value={solution}
                  placeholder='solution'
                />
                <div className='w-max'><Button onClick={onSolutionSubmit} text="Submit" /></div>

              </div>
            </div>
            <Link to="/leaderboard">
              <p className='text-blue-700 text-xl'>/Leaderboard</p>
            </Link>
          </div>


        </>}
      </div>

      {usernameFilled && <>
        <div className="fixed top-4 text-center right-4 bg-gray-50  text-blue-600 font-medium px-6 py-2 rounded-2xl">
          <p>Connected : {props.connected.toString()}</p>
          <p className='text-green-600'>Score : {score}</p>
        </div>

        <div onClick={onLogout} className="fixed cursor-pointer bottom-8 text-center right-8 bg-red-50  text-red-600 font-medium px-3 py-1 rounded-2xl">
          <p className='text-base'>Logout</p>
        </div>

      </>}
    </Layout>
  )
}

export default HomePage