import { handleGithubLogin } from "@/lib/action"
import styles from "./login.module.css"
import LoginForm from "@/components/loginForm/LoginForm"
import { auth } from "@/lib/auth"

const LoginPage = async () => {
  const session = await auth()
  return (
    <div className="w-screen">
      <div className=" flex flex-row items-center justify-center w-[100%]">
        <div
          className={`${styles.wrapper} w-[600px] p-[50px] flex flex-col text-center gap-[30px] rounded-[5px] outline outline-4 outline-offset-4 outline-black`}
        >
          <LoginForm session={session} />
        </div>
      </div>
      <form action={handleGithubLogin}>
        <button className="w-[100%] p-[20px] cursor-pointer underline text-black">
          Login With Github
        </button>
      </form>
    </div>
  )
}

export default LoginPage
