import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Briefcase, GraduationCap, Award, Code } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-muted-foreground max-w-2xl">
            My professional experience, education, and skills as a Software Engineer, IoT Developer, and Researcher.
          </p>
        </div>
        <Button className="flex items-center gap-2" asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="h-4 w-4" /> Download PDF
          </Link>
        </Button>
      </div>

      <div className="grid gap-8">
        {/* Personal Information */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Your Name</CardTitle>
              <CardDescription>Software Engineer, IoT Developer, Researcher</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-medium mb-1">Contact Information</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Email: contact@example.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Location: San Francisco, CA</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-1">Online Presence</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Website: yourportfolio.com</li>
                  <li>LinkedIn: linkedin.com/in/yourname</li>
                  <li>GitHub: github.com/yourusername</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Experienced Software Engineer and IoT Developer with over 5 years of experience designing and implementing
              innovative solutions. Specialized in full-stack web development, IoT systems, and research. Proven track
              record of delivering high-quality, scalable applications that solve complex problems. Strong background in
              both software and hardware integration, with a passion for creating technology that makes a positive
              impact.
            </p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Job 1 */}
            <div className="border-b pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-bold">Senior Software Engineer</h3>
                <Badge variant="outline">Jan 2021 - Present</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Tech Innovations Inc. • San Francisco, CA</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                <li>Led development of cloud-based IoT platform serving over 10,000 devices</li>
                <li>Architected and implemented real-time data processing pipeline using Node.js and Kafka</li>
                <li>Reduced system latency by 40% through architecture optimization</li>
                <li>Mentored junior developers and established best practices for the team</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Kafka</Badge>
              </div>
            </div>

            {/* Job 2 */}
            <div className="border-b pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-bold">IoT Developer</h3>
                <Badge variant="outline">Mar 2019 - Dec 2020</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Connected Systems Ltd. • Boston, MA</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                <li>Designed and developed IoT solutions for industrial applications</li>
                <li>Created firmware for embedded devices and backend services for data collection</li>
                <li>Built data visualization dashboard reducing incident response time by 35%</li>
                <li>Implemented secure OTA update system for remote device management</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">C/C++</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">MQTT</Badge>
                <Badge variant="secondary">ESP32</Badge>
                <Badge variant="secondary">Arduino</Badge>
              </div>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-bold">Full Stack Developer</h3>
                <Badge variant="outline">Jun 2017 - Feb 2019</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">WebSolutions Co. • Remote</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                <li>Developed and maintained web applications for clients across various industries</li>
                <li>Built e-commerce platform resulting in 25% increase in client's online sales</li>
                <li>Implemented responsive design improving mobile conversion rates by 20%</li>
                <li>Integrated payment gateways and third-party APIs for enhanced functionality</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Education 1 */}
            <div className="border-b pb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-bold">Master's in Computer Science</h3>
                <Badge variant="outline">2018 - 2020</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">University Name • Location</p>
              <p className="text-muted-foreground">
                Specialized in artificial intelligence and machine learning. Thesis on "IoT Data Analytics for Smart
                Cities."
              </p>
            </div>

            {/* Education 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-bold">Bachelor's in Electrical Engineering</h3>
                <Badge variant="outline">2014 - 2018</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">University Name • Location</p>
              <p className="text-muted-foreground">
                Focused on embedded systems and IoT. Graduated with honors. Senior project: "Smart Home Automation
                System."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>C/C++</Badge>
                  <Badge>HTML/CSS</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>TensorFlow</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">IoT & Hardware</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Arduino</Badge>
                  <Badge>Raspberry Pi</Badge>
                  <Badge>ESP32</Badge>
                  <Badge>MQTT</Badge>
                  <Badge>Sensors</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications & Awards */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-6 w-6 text-primary" />
            <CardTitle>Certifications & Awards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">AWS Certified Solutions Architect</h3>
              <p className="text-sm text-muted-foreground">Amazon Web Services • 2021</p>
            </div>

            <div>
              <h3 className="font-medium">Google Cloud Professional Developer</h3>
              <p className="text-sm text-muted-foreground">Google • 2020</p>
            </div>

            <div>
              <h3 className="font-medium">Best Paper Award - IoT Conference 2022</h3>
              <p className="text-sm text-muted-foreground">International IoT Conference • 2022</p>
            </div>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card>
          <CardHeader>
            <CardTitle>Publications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">"Secure Communication Protocols for IoT Devices in Smart Cities"</h3>
              <p className="text-sm text-muted-foreground">Journal of IoT Security, Vol. 5, Issue 2, 2022</p>
            </div>

            <div>
              <h3 className="font-medium">"Real-time Data Processing for Industrial IoT Applications"</h3>
              <p className="text-sm text-muted-foreground">IEEE International Conference on IoT, 2021</p>
            </div>

            <div>
              <h3 className="font-medium">"Energy-Efficient Algorithms for Battery-Powered IoT Devices"</h3>
              <p className="text-sm text-muted-foreground">Journal of Embedded Systems, Vol. 3, Issue 4, 2020</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
