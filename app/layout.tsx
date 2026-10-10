import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Earway · A little listening, every day',description:'Your personal ear-training path. Adaptive notes, intervals, and chords inside musical context.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
