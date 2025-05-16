import Button from "../Button/Button";
import s from "./LoadMore.module.css";

interface LoadMoreProps {
  onClick: () => void;
  hasMore: boolean;
}

const LoadMore = ({ onClick, hasMore }: LoadMoreProps) => {
  if (!hasMore) return null;
  return (
    <div className={s.wrapper}>
      <Button onClick={onClick} className={s.button}>
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
