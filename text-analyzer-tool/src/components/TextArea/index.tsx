import './index.scss'
import React, {useEffect} from 'react';
import {pronouns} from "../../data/pronouns";


const TextArea = () => {
  const [textContent, setTextContent] = React.useState('');
  const [charactersCount, setCharactersCount] = React.useState(0);
  const [wordsCount, setWordsCount] = React.useState(0);
  const [paragraphCount, setParagraphCount] = React.useState(0);
  const [sentenceCount, setSentenceCount] = React.useState(0);
  const [pronounsCount, setPronounsCount] = React.useState(0);
  const words = textContent.split(/\s+/);
  const filteredWords = words.map((word:any) => word.toLowerCase()).filter((word :any) => pronouns.includes(word));


  useEffect(() => {
    setCharactersCount(textContent.length)
    setWordsCount(textContent.split(/\s+/).filter(word => word !== '').length)
    // setting paragraph length
    setParagraphCount(textContent.split('\n').filter(paragraph => paragraph.trim() !== '').length)
    // setting sentence length
    setSentenceCount(textContent.split(/[.!?]+/).filter(sentence => sentence !== '').length)
    setPronounsCount(filteredWords.length);
  }, [textContent])

  return <>
      <textarea className="text-area" placeholder="Paste your text here..." autoFocus
                onChange={event => setTextContent(event.target.value)}/>
    <p>Characters: {charactersCount}</p>
    <p>Words: {wordsCount}</p>
    <p>Paragraph: {paragraphCount}</p>
    <p>Sentences: {sentenceCount}</p>
    <p>Pronouns: {pronounsCount}</p>
  </>
}

export default TextArea