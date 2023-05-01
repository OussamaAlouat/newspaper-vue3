import { useNewsPaperStore } from '@/stores/store';

const useNewsPaperNav = () => {
  const newsStore = useNewsPaperStore();
  const switchSearch = () => {
    newsStore.switchSearchType();
  }

  return {
    // Actions
    switchSearch,
  
  }
};

export default useNewsPaperNav;