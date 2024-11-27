import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com/Rudendru-03" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rudendru-rahul-366955201/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/rudendru39877" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://leetcode.com/u/bumrah03/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
            <SiLeetcode size={24} />
          </a>
        </div>
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Rudendru Rahul. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

