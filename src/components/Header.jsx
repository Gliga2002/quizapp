import quizLogo from '../../public/quiz-logo.png';

// project setup will figure it out and will inject path to the potentially optimize img behind the scenes

function Header() {
  return <header>
    <img src={quizLogo} alt="Quiz logo" />
    <h1>ReactQuiz</h1>
  </header>
}

export default Header;