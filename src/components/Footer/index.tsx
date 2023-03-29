import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Stars出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'movie',
          title: '厂长资源',
          href: 'https://czzzu.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Stars Github</>,
          href: 'https://github.com/Wake-Stars',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
