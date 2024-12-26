// assets
import SearchIcon from 'public/icons/ic-search.svg';

// components
import ImageButton from '../ImageButton/ImageButton';

export enum SearchBarVariant {
  PRIMARY = 'primary',
  SUB = 'sub',
}

type SearchBarProps = {
  variant: SearchBarVariant;
  title: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
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
  variant = SearchBarVariant.PRIMARY,
  title,
  value,
  placeholder,
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <div
      className={`${SEARCH_BAR_STYLE[variant].searchBar} flex items-center justify-center pl-[32px] pr-[26px] py-[20px] relative`}
    >
      <p className="text-regular-b text-primary-200 truncate relative pr-[19px] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-[1px] after:h-[18px] after:bg-gray-500">
        {title}
      </p>
      <div className="w-[19px]" />
      <input
        type="text"
        className="flex-1 focus:outline-none text-content-m bg-transparent"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
      <div className="pl-[26px]  flex items-center justify-center">
        <ImageButton src={SearchIcon} onClick={onSubmit} label="검색버튼" />
      </div>
    </div>
  );
}

export default SearchBar;
