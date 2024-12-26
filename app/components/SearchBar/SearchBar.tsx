import searchIcon from '../../assets/icons/ic-search.svg';

// searchbar type = main, sub
// 키워드조회 텍스트 변경 가능

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: 'primary' | 'sub';
  title: string;
  onPressSearch: () => void;
};

const SEARCH_BAR_STYLE = {
  primary: {
    searchBar:
      'search-bar-main w-[700px] h-[65px] bg-white border-2 border-primary-200 rounded-full',
  },
  sub: {
    searchBar: 'search-bar-sub w-[590px] h-[65px] bg-none',
  },
} as const;

function SearchBar({
  type = 'primary',
  title,
  onPressSearch,
  ...props
}: SearchBarProps) {
  const { value, onChange, placeholder } = props;

  return (
    <div
      className={`${SEARCH_BAR_STYLE[type].searchBar} flex items-center justify-center pl-[32px] pr-[26px] py-[20px]`}
    >
      <p className="text-regular-b text-primary-200 truncate">{title}</p>
      <div className="w-[1px] h-[18px] bg-gray-500 mx-[19px]" />
      <input
        type="text"
        className="flex-1 focus:outline-none text-content-m bg-transparent"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="pl-[26px] flex items-center justify-center">
        <button
          className="w-[25px] h-[25px]"
          type="button"
          onClick={onPressSearch}
        >
          <img src={searchIcon} alt="검색" title="검색" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
