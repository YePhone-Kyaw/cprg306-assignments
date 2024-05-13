import Link from "next/link";

const githubRepo = "https://github.com/YePhone-Kyaw/cprg306-assignments.git";

export default function StudentInfo() {
    return(
        <div>
        <p>Ye Phone Kyaw</p>
        <Link href={githubRepo}>CPRG306-Assignments</Link>
    </div>
    );   
}