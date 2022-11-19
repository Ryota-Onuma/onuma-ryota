import Top from '@/components/pages/Top';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { useSize } from '@/utils/Hooks';

const Index = () => {
  const { isDesktop } = useSize();
  return (
    <Main
      meta={
        <Meta
          title="onuma-ryota.com | Top"
          description={AppConfig.description}
        />
      }
    >
      <Top isDesktop={isDesktop} />
    </Main>
  );
};

export default Index;
