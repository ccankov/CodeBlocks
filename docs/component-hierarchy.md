## Component Hierarchy

**Root**
 - ModalContainer
 - App

**ModalContainer**
 - ModalWrapper
    * LoginContainer
       + LoginModal
    * SignupContainer
       + SignupModal

**Home**
 - NavbarContainer
    * Navbar
 - HomeActionsContainer
    * HomeActions
 - GuestLoginContainer
    * GuestLogin
 - Study
 - Library
 - Footer

**Study**
 - SidebarContainer
    * Sidebar
 - BlockContainer
    * Block
       * BlockCard
          * BlockProblem

**Library**
 - NavbarContainer
    * Navbar
 - MainContainer
    * Main

**Main**
 - DeckSidebarContainer
    * DeckSidebar
 - DeckView
    * DeckFormContainer
       + DeckForm
    * DeckDetailsContainer
       + DeckDetails
 - BlockFormContainer
    * BlockForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Home" |
| "/study/:deckId" | "Study" |
| "/library" | "Library" |
| "/library/decks/:deckId" | "DeckDetailsContainer" |
| "/library/decks/:deckId/edit" | "DeckFormContainer" |
| "/library/decks/new" | "DeckFormContainer" |
| "/library/blocks/:blockId" | "BlockDetailsContainer" |
| "/library/blocks/:blockId/edit" | "BlockFormContainer" |
| "/library/blocks/new" | "BlockFormContainer" |
