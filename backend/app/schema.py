import graphene

# --- Service Item Type (defined in previous step) ---
class ServiceItemType(graphene.ObjectType):
    id = graphene.ID()
    title = graphene.String()
    description = graphene.String()
    icon_name = graphene.String() # e.g., 'icon-ml.png', 'icon-strategy.png'

    # Constructor to easily create instances
    def __init__(self, id, title, description, icon_name):
        self.id = id
        self.title = title
        self.description = description
        self.icon_name = icon_name

# --- Portfolio Item Type (defined in previous step) ---
class PortfolioItemType(graphene.ObjectType):
    id = graphene.ID()
    title = graphene.String()
    description = graphene.String()
    image_url = graphene.String() # Path to image, e.g., '/images/project-a.png'
    case_study_url = graphene.String() # URL to a detailed case study page or '#'

    # Constructor
    def __init__(self, id, title, description, image_url, case_study_url):
        self.id = id
        self.title = title
        self.description = description
        self.image_url = image_url
        self.case_study_url = case_study_url

# --- Placeholder Data ---
_placeholder_services = [
    ServiceItemType(id='1', title='AI-Powered Website Development', description='We design and develop intelligent websites that offer personalized experiences, smart features, and data-driven insights. From dynamic content generation to AI-driven user interaction, we build platforms that engage and convert.', icon_name='icon-website.png'), # Assuming a generic icon
    ServiceItemType(id='2', title='Custom AI Tool Creation', description='Have a unique challenge? We build bespoke AI tools and applications tailored to your specific needs. This includes natural language processing solutions, computer vision systems, predictive analytics models, and more.', icon_name='icon-custom-ai.png'),
    ServiceItemType(id='3', title='AI-Powered E-commerce Platforms', description='Transform your online store with intelligent features. We develop e-commerce solutions with AI-driven product recommendations, personalized shopping experiences, intelligent search, fraud detection, and inventory optimization.', icon_name='icon-ecommerce.png'),
    ServiceItemType(id='4', title='AI Strategy & Consultation', description='Not sure where to start with AI? We provide expert consultation to help you identify opportunities for AI integration, define a clear strategy, and create a roadmap for successful implementation.', icon_name='icon-strategy.png'),
    ServiceItemType(id='5', title='Data Analytics & Insights', description='Unlock the power of your data. We help you collect, process, and analyze data to gain valuable insights, make informed decisions, and optimize your operations using machine learning techniques.', icon_name='icon-data-analytics.png') # Reusing existing icon name
]

_placeholder_portfolio_items = [
    PortfolioItemType(id='p1', title='Collectibles E-commerce Platform', description='An advanced e-commerce solution for buying and selling rare collectibles, featuring AI-powered recommendations, smart search, and authenticity verification (conceptual).', image_url='/images/placeholder-project.png', case_study_url='#case-study-collectibles'),
    PortfolioItemType(id='p2', title='AI-Driven Analytics Dashboard', description='A custom dashboard providing real-time business intelligence and predictive analytics for a leading logistics company.', image_url='/images/placeholder-project.png', case_study_url='#case-study-analytics'),
    PortfolioItemType(id='p3', title='NLP Chatbot for Customer Support', description='An intelligent chatbot that automates customer service inquiries, providing instant responses and improving user satisfaction for a SaaS provider.', image_url='/images/placeholder-project.png', case_study_url='#case-study-chatbot')
]


# --- Query Type (with Resolvers) ---
class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value='stranger'))
    
    all_services = graphene.List(ServiceItemType)
    all_portfolio_items = graphene.List(PortfolioItemType)

    # Resolver for 'hello'
    def resolve_hello(self, info, name):
        return f'Hello, {name}!'

    # Resolver for 'all_services'
    def resolve_all_services(self, info):
        return _placeholder_services

    # Resolver for 'all_portfolio_items'
    def resolve_all_portfolio_items(self, info):
        return _placeholder_portfolio_items

# --- Schema (existing) ---
schema = graphene.Schema(query=Query)
