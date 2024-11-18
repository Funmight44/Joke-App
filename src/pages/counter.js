import { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
    const [character, setCharacter] = useState(0);
    const [wordcount, setWordCount] = useState(0);
    const [text, setText] = useState('');

    function handleInput(event){
        const content = event.target.value;
        setText(content)
        setCharacter(content.length);
        content.trim();

        const wordList =  content.split(/\s/);
        const words = wordList.filter((word) => {
            return word !== '';
        });
        setWordCount(words.length)
    }

    function clear(){
        setText('')
        setCharacter(0)
        setWordCount(0)
    };

    return ( 
        <main>
            <section className="counter">
                <h1>Word Counter</h1>
                <p className="subTopic">Free online character and word count tool</p>
            </section>

            <section className="container">
                <textarea onInput={handleInput}  placeholder="type or paste your text" value={text} className="sm:w-64 md:w-96 lg:w-3/5"/>
                <span onClick={clear} className="clear">Clear</span>
            </section>
               <div className="spans">
                    <span className="character">character: {character}</span>
                    <span className="word">word: {wordcount} </span>
                </div>
           <Link to='/jokes'> <span>see jokes</span></Link>
        </main>
     );
}
 
export default Counter;