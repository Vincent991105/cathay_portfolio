// Read about the code below, achieving that make input element in “SearchInput” to be
// focused while search button on click

// 這次的調整會使用到useRef
import { useRef } from "react";

// 傳入主元件提供的綁定function
function SearchButton({ onFocusInput }) {
  return <button onClick={onFocusInput}> Search </button>;
}

// 設定綁定物件
function SearchInput({ inputRef }) {
  return <input ref={inputRef} />;
}

export default function Page() {
  // 根據React的套件庫使用原則，針對部分元件可能需要提前定義才可以使用(如：react-router > useNavigate)
  const inputRef = useRef(null);

  //   定義連動的function
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <nav>
        <SearchButton onFocusInput={handleFocus} />
      </nav>
      <SearchInput inputRef={inputRef} />
    </>
  );
}
