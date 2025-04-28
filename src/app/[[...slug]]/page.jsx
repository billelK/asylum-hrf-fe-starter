
import { notFound, redirect } from 'next/navigation';
import { LandingPage } from '../../components/pages/Landing/index';
import { GraphsPage } from '../../components/pages/DataVisualizations/GraphsPage';
import Profile from '../../components/pages/Profile/index';
import { pageWrapper } from '../../components/layout/PageWrapper';
import { ProvideAppContext } from '../../context/AppContext'; // <-- Import your context here

export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['graphs'] },
    { slug: ['profile'] },
  ];
}

export default function Page({ params }) {
  if (params?.slug?.[0] === 'favicon.ico') {
    redirect('/');
  }

  const slug = params?.slug?.[0] || '';

  let content;
  if (slug === '') {
    content = <LandingPage />;
  } else if (slug === 'graphs') {
    content = <GraphsPage />;
  } else if (slug === 'profile') {
    content = <Profile />;
  } else {
    notFound();
  }

  return (
    <ProvideAppContext>
      {pageWrapper(content)}
    </ProvideAppContext>
  );
}