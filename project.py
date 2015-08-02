from project_module import project_object, image_object, link_object, challenge_object

p = project_object('marathon', 'Geneva Marathon analysis')
p.domain = 'http://www.aidansean.com/'
p.path = 'marathon'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'marathon'
p.mathjax = True
p.tags = 'Misc'
p.technologies = 'canvas,CSS,HTML,JavaScript'
p.links.append(link_object(p.domain, 'marathon', 'Live page'))
p.introduction = 'In 2013 I took part in the Geneva Relay Marathon with some friends. The results were presented, leg by leg, on a webpage.  I took this as an opporrtunity to analyse some data and find a novel way to display the data.'
p.overview = '''The data are taken from the Geneva website and arranged by team and leg.  The user can choose how to view the data and the results are written to canvas elements.  When sorting by leg time, the bar charts are aligned to the start of that leg.  There are also histograms showing the distribution of times per leg.'''

p.challenges.append(challenge_object('This project was mostly an opportunity to explore data visualisation.', 'Aligning the bar charts to match a given leg meant determining the width of the widest barchart and scaling the image appropriately.  It was necessary to write a scipt to generate histograms.', 'Resolved'))

p.challenges.append(challenge_object('The data were somewhat inhomogenous and incomplete.', 'Due to technical problems on the day, some data were missing, including team members not passing though checkpoints, so legs were not properly recorded.  In these cases the times had to be estimated assuming uniform performance across multiple legs of the race.', 'Resolved'))
